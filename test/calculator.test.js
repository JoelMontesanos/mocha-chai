const { assert } = require('chai');
const chai = require ('chai');
const {expect} = require('chai');


const calculator = require('../src/calculator');

describe ('Calculator',  () =>{
    describe('Suma', () =>{
        it('suma dos números', () => {
            expect(calculator.add(4,4)).to.equal(8);
            expect(calculator.add(6,2)).to.equal(8);
            expect(calculator.add(120,0)).to.equal(120);
            expect(calculator.add(10,40)).to.equal(50);
        });
    });
});
describe ('Calculator',  () =>{
    describe('Multiplicación', () =>{
        it('multiplica dos números', () => {
            expect(calculator.multiply(4,4)).to.equal(16);
            expect(calculator.multiply(6,2)).to.equal(12);
            expect(calculator.multiply(120,0)).to.equal(0);
            expect(calculator.multiply(10,40)).to.equal(400);
        });
    });
});
describe ('Calculator',  () =>{
    describe('Divición', () =>{
        it('multiplica dos números', () => {
            expect(calculator.divide(4,4)).to.equal(1);
            expect(calculator.divide(6,2)).to.equal(3);
            expect(calculator.divide(120,1)).to.equal(120);
            expect(calculator.divide(10,40)).to.equal(.25);
        });
    });
});
describe ('Calculator',  () =>{
    describe('Resta', () =>{
        it('multiplica dos números', () => {
            expect(calculator.subtract(4,4)).to.equal(0);
            expect(calculator.subtract(6,2)).to.equal(4);
            expect(calculator.subtract(120,1)).to.equal(119);
            expect(calculator.subtract(10,40)).to.equal(-30);
        });
    });
});