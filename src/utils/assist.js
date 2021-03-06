/**
 * Created by Jincheng on 2017/4/21.
 */
function findComponentDownword (context, componentName) {
  const childrens = context.$children
  let children = null
  if (childrens.length) {
    /* childrens.forEach(child => {
      const name = child.$options.name
      if (name === componentName) {
        children = child
      }
    }) */
    for (let i = 0; i < childrens.length; i++) {
      const child = childrens[i]
      const name = child.$options.name
      if (name === componentName) {
        children = child
        break
      } else {
        children = findComponentDownword(child, componentName)
        if (children) break
      }
    }
  }
  return children
}

function findComponentsDownward (context, componentName, components = []) {
  const childrens = context.$children
  if (childrens.length) {
    childrens.forEach(child => {
      const name = child.$options.name
      const childs = child.$children
      if (name === componentName) {
        components.push(child)
      }
      if (childs.length) {
        const findChilds = findComponentsDownward(child, componentName, components)
        if (findChilds) {
          components.concat(findChilds)
        }
      }
    })
  }
  return childrens
}

function findComponentUpward (context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName]
  } else {
    componentNames = componentName
  }
  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) {
      name = parent.$options.name
    }
  }
  return parent
}

export {
  findComponentDownword,
  findComponentsDownward,
  findComponentUpward
}
