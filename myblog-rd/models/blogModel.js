const db = require("./db");

module.exports = {
    getBlogs(){
        return db.query(`SELECT * FROM t_blog order by post_time desc`);
    },
    getBlogById(blogId){
        return db.query(`
        SELECT blog.*, comm.comm_id, comm.content as comm_content, comm.post_time as comm_post_time, usr.username
        FROM t_blog blog  LEFT JOIN t_comment comm 
        ON comm.blog_id=blog.blog_id 
        LEFT JOIN t_user usr ON comm.user_id=usr.user_id
        WHERE blog.blog_id=?`, [blogId]);
    },
    saveBlog( title, content, userId){
        return db.query("insert into t_blog set ?", { title, content, user_id:userId});
    }
};