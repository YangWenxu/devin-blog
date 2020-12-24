import React from 'react'

// components
import { Divider, Rate, Icon, Avatar } from 'antd'
import Href from '@/components/Href'
import SvgIcon from '@/components/SvgIcon'

const skills = [
  {
    label: '具备扎实的 Javascript 基础，熟练html,css,js,Es6,webpack,vue,react等相关web开发的技术栈',
    rate: 4
  },
  {
    label: '写过vuejs响应式和虚拟dom的源码，对vue3也有了解',
    rate: 4
  },
  {
    label: '看过react源码，熟悉react，react hooks，redux等react生态',
    rate: 4
  },
  {
    label: '熟悉nodejs及koa的开发，写过koa源码，熟悉ssr等服务端渲染',
    rate: 4
  },
  {
    label: '熟悉前端工程化，模块化方案，构建工具，webpack等性能优化',
    rate: 4
  },
  {
    label: '熟悉http网络知识，浏览器原理，算法数据结构',
    rate: 4
  },
  {
    label: '了解小程序开发，设计模式，mysql，MongoDB数据库',
    rate: 3
  }
]

const MyInfo = () => {
  return (
    <>
      <Divider orientation='left'>博客简述</Divider>
      <p>本博客使用的技术为 react hooks + antd + koa2 + mysql</p>
      {/* <p>
        源码地址为 <Href href='https://github.com/gershonv/react-blog'>github</Href>
        ，仅供参考，不做商业用途！
      </p> */}

      <Divider orientation='left'>关于我</Divider>

      <ul className='about-list'>
        <li>姓名：杨文旭</li>
        <li>学历专业：本科 计算机科学与技术</li>
        <li>
          联系方式：
          <Icon type='qq' /> 2653917242
          <Divider type='vertical' />
          <SvgIcon type='iconemail' style={{ marginRight: 5, transform: 'translateY(2px)' }} />
          <a href='mailto:2653917242@qq.com'>2653917242@qq.com</a>
        </li>
        <li>坐标：杭州市</li>
        <li>
          其他博客地址：
          <Href href='https://yangwenxu.github.io'>devin-blog</Href>
          <Divider type='vertical' />
          <Href href='https://juejin.im/user/835284566017272'>掘金主页</Href>
        </li>
        <li>
          技能
          <ul>
            {skills.map((item, i) => (
              <li key={i}>
                {item.label}
                <Rate defaultValue={item.rate} disabled />
              </li>
            ))}
          </ul>
        </li>
        <li>
          其他
          <ul>
            <li>常用开发工具： vscode、webstorm、git</li>
            <li>熟悉的 UI 框架： antd、element-ui、vux</li>
            <li>具备良好的编码风格和习惯，团队规范意识，乐于分享</li>
          </ul>
        </li>
        <li>
          个人
          <ul>
            <li>欢迎交流！</li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export default MyInfo
