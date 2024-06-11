import Project from '../models/project.model.js';
export default async (req, res) => {
  try {
    const projects = await Project.find({}).sort('-createdAt');
    return res.render('home', {
      title: 'Issue Tracker | Home',
      projects,
    });
  } catch {
    console.log('Error', err);
    return;
  }
};
