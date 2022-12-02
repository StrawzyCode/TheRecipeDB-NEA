//Homepage
exports.homepage = async(req, res) => {
  try {
    res.render('index', {title: 'RecipeDB - Home'});
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured"})
  }
  res.render('index', {title: 'RecipeDB - Home'});
}

//Homepage
exports.exploreLatest = async(req, res) => {
  try {
    res.render('exploreLatest', {title: 'RecipeDB - Latest'});
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured"})
  }
  res.render('exploreLatest', {title: 'RecipeDB - Latest'});
}
