export interface Pedido {
    id_pedido:Number
    id_producto:Number
    id_cliente:Number
    fecha_pedido:Date
    estado:String
    activo:Boolean
    total:Number
    porcentaje_mantenimiento?:Number
}
