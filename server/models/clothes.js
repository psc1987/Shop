// 모델링한 정보를 바탕으로 ORM 사용 
// 결제모듈연동x -> 포인트 시스템
// clothes 정보

module.exports = function(sequelize, DataTypes) {
    let clothes = sequelize.define('clothes', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        category: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        img: {
            type: DataTypes.STRING(255)
        }
    }, {});
    clothes.associate = function(models) {
        clothes.hasMany(models.purchase); // 1:N
    };
    return clothes
};