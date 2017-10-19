
class DataTable{

    constructor(seriesArray = []){
        this.seriesArray = seriesArray;
        this.dimension;
    }

    addSeries(series,type){
        if(this.checkDataType(series,type)){
            this.seriesArray.push(series);
        }else{
            console.error('Invalid type of series data,expect ' + type );
        }
        
    }

    setDimension(dimension){
        this.dimension = dimension ;
    }

    getDataTable(){
        return {
            dimension:this.dimension,
            data: this.seriesArray
        }
    }

    checkDataType(series,type){
        const seriesData = Object.values(series);
        return seriesData.every((value,key)=>{
            return typeof value === type ;
        })
    }


} 

export default DataTable;