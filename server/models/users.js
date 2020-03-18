// 모델링한 정보를 바탕으로 ORM 사용 
// 결제모듈연동x -> 포인트 시스템
// user 정보

module.exports = function(sequelize, DataTypes) {
    let users = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        uid: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        price: { // 유저가 가지고 있는 돈
            type: DataTypes.INTEGER(11),
            defaultValue: 0
        },
        status: { // 유저의 권한 0-관리자, 1-일반유저
            type: DataTypes.INTEGER(11),
            defaultValue: 1
        }
    }, {});
    users.associate = function(models) {
        users.hasMany(models.purchase); // 1:N
    };
    return users
};