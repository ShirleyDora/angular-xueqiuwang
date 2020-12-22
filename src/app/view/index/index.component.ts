import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  //指数选择
  quoteList=[];
  //移动位置
  zhishuListPosition={transform:'translate(0px)'};
  constructor() { 
    this.getData();
  }

  ngOnInit(): void {
  }
  //获取数据
  async getData(){
    let httpUrl = 'http://localhost:8080/api/index/quote'
    let result = await axios.get(httpUrl);
    //console.log(result.data);
    //指数选择
    this.quoteList = result.data.data.items;
    //console.log('quoteList:',this.quoteList);
  }
  //小圆点控制移动位置
  toggleZhishu(index){
    //console.log(index)
    this.zhishuListPosition={transform:`translate(-${index*640}px)`}
  }
}
