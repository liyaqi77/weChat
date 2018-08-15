export const getUserInfo = (uid) => {
    return {
        uid: uid,
        code: 1,
        msg: '获取用户成功',
        data: {
            username: 'Johnny',
            imageUrl: '../images/pic.jpg',
            job: '阿里巴巴北京电商',
            location: '北京市、朝阳区',
            mine: '熟练使用各类框架'
        }

    }
}