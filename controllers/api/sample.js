'use strict';

module.exports = (router) => {

  /**
   * @swagger
   * /api/sample:
   *   get:
   *     description: Sample API Doc
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */

  router.get('/', (req, res) => {

    let data = {
      'success': true
    };

    res.json(data);

  });

};
