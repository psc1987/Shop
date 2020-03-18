// 모델링한 정보를 바탕으로 ORM 사용 
// 결제모듈연동x -> 포인트 시스템
// purchase 정보

module.exports = function(sequelize, DataTypes) {
    let purchase = sequelize.define('purchase', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        count: {
            type: DataTypes.INTEGER(11),
            defaultValue: 1
        }
    }, {});
    purchase.associate = function(models) {
        purchase.belongsTo(models.clothes); // 1:N 여러 개 옷 구매 가능
        purchase.belongsTo(models.users);
    };
    return purchase
};