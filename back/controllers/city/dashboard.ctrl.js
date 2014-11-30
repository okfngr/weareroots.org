/**
 * @fileOverview GET /dashboard City page.
 */

// var log = require('logg').getLogger('app.ctrl.city.Dashboard');
var ControllerBase = require('nodeon-base').ControllerBase;

// var CommunitiesEnt = require('../../entities/community.ent');

/**
 * The city Dashboard controller.
 *
 * @contructor
 * @extends {app.ControllerBase}
 */
var Dashboard = module.exports = ControllerBase.extendSingleton(function(){
  this.use.push(this._useIndex.bind(this));
});
/**
 * The index page.
 *
 * @param {Object} req The request Object.
 * @param {Object} res The response Object.
 */
Dashboard.prototype._useIndex = function(req, res) {
  req.i18n.setLocale(req.city.lang);

  res.render('city/dashboard', {
    og: null, // title, site_name, url, description, image, appId, type
    pageTitle: null,
    ga: null, // GA id
    gaSite: null, // Canonical GA website name
  });
};
