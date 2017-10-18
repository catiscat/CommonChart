## CommonChart数据模型
[参考 https://en.wikipedia.org/wiki/Chart]

### 图的核心要素

其中前三个属于option，后两个属于数据。

* title 标题
* 图例
* 网格

* 维度
* 数据

###  图表数据模型

#### DataTable类 : 包含数据和维度两个关键元素

包括 addDataSeries,addDimensionSeries  接口,用于生成dataTable

```js
var data = new DataTable();
dataTable就像这样：
[
    ['Year', 'Sales', 'Expenses'],
    ['2013',  1000,      400],
    ['2014',  1170,      460],
    ['2015',  660,       1120],
    ['2016',  1030,      540]
]      

series：就是一列数据，上面dataTable中的：
{'Sales':1000,1170,660,1030} 就是一个系列的数据

dataTable实例的方法： 
*添加维度系列 dataTable.addDataSeries( {'Sales':1000,1170,660,1030},[type] ); 
*添加数据系列 dataTable.addDimensionSeries({'Year':'2013','2014','2015','2016'},[type]);

```


#### Options类：定义图表样式

##### 必需元素 

* 维度轴，通常是x轴
* 数据轴，通常是y轴
* title : 图表标题
* legend ：图例
* grid ：图表网格

###### 可选元素

* toolbox：工具栏 【可选】


#### Actions类：用于绘制图表，转换图表Option等

##### 转换图表Option
* toEchartsOption();   //http://echarts.baidu.com/option.html
* toChartjsOption();   //http://www.chartjs.org/docs/latest/


##### 绘制图表（最后做）
* drawEcharts(dataTable,options) : 直接生成echarts的图表
* drawCharts(dataTable,options)：直接生成chart的图表



