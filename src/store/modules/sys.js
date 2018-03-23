import * as types from '../mutation-types'
import {asyncRouterMap} from '@/router/index'

// initial state
const state = {
  isCollapse: false, // 菜单状态是否收起
  menu: null, // 菜单
  role: null // 角色权限
}

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param role
 * @param route
 */
function hasPermission(role, route) {
  if (route.meta && route.meta.role) {
    return route.meta.role.indexOf(role) !== -1
  } else {
    return true
  }
}
/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param role
 */
function filterAsyncRouter(asyncRouterMap, role) {
  console.log('过滤之前的路由', asyncRouterMap)
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(role, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, role)
      }
      return true
    }
    return false
  })
  console.log('过滤之后的路由', accessedRouters)
  return accessedRouters
}

// getters
const getters = {}

// mutations
const mutations = {
  /*
  当前菜单收展状态
  */
  [types.IS_COLLAPSE](state, payload) {
    state.isCollapse = !state.isCollapse
  },
  /*
  当前菜单(主要是注销时清空)
  */
  [types.SET_MENU](state, payload) {
    state.menu = payload
  },
  /*
  通过角色过滤出可展示的菜单
  如果是管理直接赋值
  否则过滤出符合角色的对应菜单
  目前每个用户只存在一种角色 如果业务不是如此需要修改**
  */
  [types.FILTER_ROLE](state, payload) {
    state.role = payload
    // if (payload === 'admin') {
    //   console.log('管理员身份', payload)
    //   state.menu = asyncRouterMap
    // } else {
    state.menu = filterAsyncRouter(asyncRouterMap, payload)
    // }
  }
}

// actions
const actions = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
