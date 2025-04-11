const base = {
    get() {
        return {
            url : "http://localhost:8080/gongjiaochexinxi/",
            name: "gongjiaochexinxi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gongjiaochexinxi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "公交车信息管理系统"
        } 
    }
}
export default base
