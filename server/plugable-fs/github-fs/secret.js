/*******************************************************************************
 * @license
 * Copyright (c) 2013 VMware, Inc. All Rights Reserved.
 * THIS FILE IS PROVIDED UNDER THE TERMS OF THE ECLIPSE PUBLIC LICENSE
 * ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THIS FILE
 * CONSTITUTES RECIPIENTS ACCEPTANCE OF THE AGREEMENT.
 * You can obtain a current copy of the Eclipse Public License from
 * http://www.opensource.org/licenses/eclipse-1.0.php
 *
 * Contributors:
 *   Kris De Volder
 ******************************************************************************/

var nodefs = require('fs');
var pathResolve = require('../../jsdepend/utils').pathResolve;

var secretFile = pathResolve(__dirname, '../../../secret.json');

var secret = JSON.parse(nodefs.readFileSync(secretFile));

console.log('secret = '+JSON.stringify(secret));

module.exports = secret;