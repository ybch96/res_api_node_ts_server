import {Table, Column, DataType, Model} from "sequelize-typescript"

@Table({
    tableName:"products"
})

class Products extends Model {
    @Column({
        type:DataType.STRING
    })
    name:string

    @Column({type:DataType.FLOAT})
    price:number

    @Column({type:DataType.BOOLEAN})
    availability:boolean
}

export default Products