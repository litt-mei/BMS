<template>
  <div class="dashboard">
      <el-row>
          <el-col :span='4'>
            <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color ='rgb(31,45,61)'
            text-color = '#fff'
            active-background-color="#ffd04b"
            >
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                <i class="el-icon-document"></i>
                <span slot="title">数据管理</span>
                </template>
                <el-menu-item-group>
                <!-- <span slot="title">分组一</span> -->
                <el-menu-item index="1-1">用户列表</el-menu-item>
                <el-menu-item index="1-2">商家列表</el-menu-item>
                <el-menu-item index="1-3">食品列表</el-menu-item>
                <el-menu-item index="1-4">订单列表</el-menu-item>
                <el-menu-item index="1-5">管理员列表</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                <i class="el-icon-plus"></i>
                <span slot="title">添加数据</span>
                </template>
                <el-menu-item-group>
                <!-- <span slot="title">分组一</span> -->
                <el-menu-item index="1-1">添加商铺</el-menu-item>
                <el-menu-item index="1-2">添加食品</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            </el-menu>
          </el-col>
          <el-col :span='20'></el-col>
      </el-row>
  </div>
</template>

<script>
export default {
    name: "Dashboard",
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
</script>

<style lang="less" scoped>
    .el-menu{
        height: 100vh;
    }
</style>