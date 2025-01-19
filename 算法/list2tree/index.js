// 实现convert，把list转换成树形结构，要求尽可能降低时间复杂度
let list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门A', parentId: 0 },
  { id: 3, name: '部门A', parentId: 1 },
  { id: 4, name: '部门A', parentId: 1 },
  { id: 5, name: '部门A', parentId: 2 },
  { id: 6, name: '部门A', parentId: 2 },
  { id: 7, name: '部门A', parentId: 3 },
  { id: 8, name: '部门A', parentId: 3 },
  { id: 9, name: '部门A', parentId: 3 },
  { id: 10, name: '部门A', parentId: 5 },
  { id: 11, name: '部门A', parentId: 5 },
  { id: 12, name: '部门A', parentId: 5 },
]
