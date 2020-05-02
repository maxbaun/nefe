const findClassBySlug = (classes = [], slug) => {
  return classes.find(cl => cl.slug === slug);
};

export default findClassBySlug;
