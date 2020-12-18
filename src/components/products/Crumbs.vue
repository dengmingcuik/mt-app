<template>
  <el-breadcrumb class='m-crumbs'>
    <el-breadcrumb-item class="el-breadcrumb">{{ $store.state.position.name }}美团</el-breadcrumb-item>
    <el-breadcrumb-item class="el-breadcrumb">{{ $store.state.position.name }}{{ $route.params.name }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>