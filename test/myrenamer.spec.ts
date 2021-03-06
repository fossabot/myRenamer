import myRenamer from '../src/';
import * as assert from 'assert';
import fs from 'fs';

import 'mocha';

let zawgyiName = 'ဗမာျပည္သည္တို႔ျပည္';
let unicodeName = 'ဗမာပြည်သည်တို့ပြည်';

describe('MY_RENAMER', () => {
  describe('RENAME TO ZAWGYI', () => {
    before(() => {
      try {
        unicodeName = `${unicodeName}${Math.floor(Math.random() * 1e10)}`;
        if (!fs.existsSync(`${process.cwd()}/test/file/`)) {
          fs.mkdirSync(`${process.cwd()}/test/file/`);
        }
        fs.mkdirSync(`${process.cwd()}/test/file/${unicodeName}`);
        fs.writeFileSync(
          `${process.cwd()}/test/file/${unicodeName}.txt`,
          '',
          'utf8'
        );
      } catch (e) {}
    });

    it('SHOULD RENAME TO ZAWGYI', () => {
      const folder = new myRenamer(`${process.cwd()}/test/file/${unicodeName}`);
      const file = new myRenamer(
        `${process.cwd()}/test/file/${unicodeName}.txt`
      );
      const { isZawgyi } = file;
      folder.toZawgyi();
      file.toZawgyi();
      assert.equal(1, 1);
    });

    it('SHOULD NOT RENAME TO ZAWGYI', () => {
      const folder = new myRenamer(`${process.cwd()}/test/file/${zawgyiName}`);
      const file = new myRenamer(
        `${process.cwd()}/test/file/${zawgyiName}.txt`
      );
      const { isZawgyi } = file;
      folder.toZawgyi({ check: true });
      file.toZawgyi({ check: true });
      assert.equal(1, 1);
    });
  });

  describe('RENAME TO UNICODE', () => {
    before(() => {
      try {
        zawgyiName = `${zawgyiName}${Math.floor(Math.random() * 1e10)}`;
        if (!fs.existsSync(`${process.cwd()}/test/file/`)) {
          fs.mkdirSync(`${process.cwd()}/test/file/`);
        }
        fs.mkdirSync(`${process.cwd()}/test/file/${zawgyiName}`);
        fs.writeFileSync(
          `${process.cwd()}/test/file/${zawgyiName}.txt`,
          '',
          'utf8'
        );
      } catch (e) {
        console.log(e);
      }
    });

    it('SHOULD RENAME TO UNICODE', () => {
      const folder = new myRenamer(`${process.cwd()}/test/file/${zawgyiName}`);
      const file = new myRenamer(
        `${process.cwd()}/test/file/${zawgyiName}.txt`
      );
      const { isZawgyi } = file;
      folder.toUnicode();
      file.toUnicode();
      assert.equal(1, 1);
    });

    it('SHOULD NOT RENAME TO UNICODE', () => {
      const folder = new myRenamer(`${process.cwd()}/test/file/${unicodeName}`);
      const file = new myRenamer(
        `${process.cwd()}/test/file/${unicodeName}.txt`
      );
      const { isZawgyi } = file;
      folder.toUnicode({ check: true });
      file.toUnicode({ check: true });
      assert.equal(1, 1);
    });
  });

  describe('TOGGLE', () => {
    before(() => {
      try {
        zawgyiName = `${zawgyiName}${Math.floor(Math.random() * 1e10)}`;
        unicodeName = `${unicodeName}${Math.floor(Math.random() * 1e10)}`;
        if (!fs.existsSync(`${process.cwd()}/test/file/`)) {
          fs.mkdirSync(`${process.cwd()}/test/file/`);
        }
        fs.mkdirSync(`${process.cwd()}/test/file/${zawgyiName}`);
        fs.writeFileSync(
          `${process.cwd()}/test/file/${unicodeName}.txt`,
          '',
          'utf8'
        );
      } catch (e) {
        console.log(e);
      }
    });

    it('TOGGLE', () => {
      const folder = new myRenamer(`${process.cwd()}/test/file/${zawgyiName}`);
      const file = new myRenamer(
        `${process.cwd()}/test/file/${unicodeName}.txt`
      );
      const { isZawgyi } = file;
      folder.toggle();
      file.toggle();
      assert.equal(1, 1);
    });
  });
});
