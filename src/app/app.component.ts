import { Component } from '@angular/core';

import { Gundam } from './model/gundam';


const GUNDAMS: Gundam[] = [
  { name: '海牛高达', type: 'NewType' },
  { name: '巴巴托斯', type: '近战' },
  { name: '力天使', type: '射击' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Test project 高达展示';
  gundam: Gundam = {
    name: '海牛',
    type: 'NewType'
  };
  //修改class里的代码，定义一个变量gundams接受数组：
  gundams = GUNDAMS;
  selectedGundam: Gundam; // 定义一个selectedGudam作为接收详情的变量
  onSelected(gundam: Gundam): void {
    this.selectedGundam = gundam; // 通过参数赋值
  }
}
