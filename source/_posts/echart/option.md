---
title: echart 踩坑代码片段记录
date: '2019/6/24 20:46:25'
abbrlink: 5851
---

# echart 踩坑代码片段记录

推荐使用 echarts-for-react 传送门 [echarts-for-react](https://www.npmjs.com/package/echarts-for-react)

> 完整实践代码

```javascript
import ReactEcharts from 'echarts-for-react'

const option = {}

class App extends PureComponent {
    componentDidMount() {
        this.getOption()
    }

    getOption = () => {
        this.echartsReact.getEchartsInstance().setOption(option) // 重新渲染
    }

    render() {
        return (
            <ReactEcharts
                ref={(e) => {
                    this.echartsReact = e
                }}
                style={{ height: '280px', width: '100%' }}
                option={option}
            />
        )
    }
}
```

> ToolTips 自定义

```javascript
formatter: (params) => {
    const strArr = []
    const { name } = params[0]
    strArr.push(name)
    params.forEach((item) => {
        const { marker, seriesName, value } = item
        const str1 = `${marker} ${seriesName}：${value}%`
        strArr.push(str1)
    })
    return strArr.join('<br/>')
}
```
