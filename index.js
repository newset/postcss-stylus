// Copyright 2019 luojie
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const Input = require('postcss/lib/input');
const Parser = require('postcss/lib/parser');
const stylus = require('stylus');
let Stringifier = require('postcss/lib/stringifier');

module.exports = {
    parse(source, opts) {
        let css = stylus.render(source, {
            filename: opts.from
        });
        let input = new Input(css, { from: opts.from });
        let parser = new Parser(input);
        parser.parse();
        return parser.root;
    },
    stringify(node, builder) {
        let str = new Stringifier(builder);
        str.stringify(node);
    }
};
