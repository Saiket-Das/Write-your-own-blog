const Blog = require("../models/blogModel");

exports.getBlogsService = async () => {
  const users = await Blog.find({});
  return users;
};

exports.createBlogService = async (blogDetails) => {
  console.log(blogDetails);
  const result = await Blog.create(blogDetails);
  return result;
};

exports.getSignleBlogService = async (id) => {
  const blog = await Blog.findById(id);
  return blog;
};

exports.deleteSignleBlogService = async (id) => {
  const blog = await Blog.findByIdAndDelete(id);
  console.log("Blog", blog);
  return blog;
};

exports.getUserBlogService = async (queryEmail) => {
  const filter = { authorEmail: queryEmail };
  const blogs = await Blog.find(filter);

  return blogs;
};
