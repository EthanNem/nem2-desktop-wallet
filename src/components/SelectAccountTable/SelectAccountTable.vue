<template>
  <Table height="190" :columns="columns1" :data="data1"></Table>
</template>

<script>
import {Vue, Component} from 'vue-property-decorator'
import './SelectAccountTable.less'
import {dashboardImages} from '@/views/resources/Images'
@Component
export default class SelectAccountTable extends Vue {
  data() {
    return {
      columns1: [
        {
          title: " ",
          key: "",
          width: 100
        },
        {
          title: "ADDRESS",
          key: "address",
          width: 400
        },
        {
          title: "PATH",
          key: "path",
          width: 200
        },
        {
          title: "ASSETS",
          key: "assets",
          width: 200
        },
        {
          title: "CHOICES",
          key: "choices"
        //   width: 80,
        }
      ],
      data1: [
        {
          address: "TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP",
          path: "0/0/../43/1/",
          assets: "1000.00xym",
          choices: "/"
        },{
          address: "TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP",
          path: "0/0/../43/1/",
          assets: "1000.00xym",
          choices: "/"
        },{
          address: "TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP",
          path: "0/0/../43/1/",
          assets: "1000.00xym",
          choices: "/"
        },{
          address: "TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP",
          path: "0/0/../43/1/",
          assets: "1000.00xym",
          choices: "/"
        },{
          address: "TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP",
          path: "0/0/../43/1/",
          assets: "1000.00xym",
          choices: "/"
        },{
          address: "TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP",
          path: "0/0/../43/1/",
          assets: "1000.00xym",
          choices: "/"
        },{
          address: "TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP",
          path: "0/0/../43/1/",
          assets: "1000.00xym",
          choices: "/"
        },{
          address: "TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP",
          path: "0/0/../43/1/",
          assets: "1000.00xym",
          choices: "/"
        }
      ]
    };
  }
};
</script>

<style>
</style>