const enhancer = require('./enhancer.js');

// test away!
let item = {
    name: '',
    enhancement: 15,
    durability: 85
}
describe('in-game item enhancements',  () => {
    
    describe('repair()', () => {
        it('should set item durability to 100', () => {
            expect(item.durability).toBe(85);
            enhancer.repair(item);
            expect(item.durability).toBe(100);
      
        })
    })

    describe('success',() => {
        it('should increase item enhancement by 1 if enhancement < 20', () => {
          expect(item.enhancement).toBe(15);
          enhancer.success(item);
          expect(item.enhancement).toBe(16);
        })

        it('should not change item enhancement if enhancement = 20', () => {
            item.enhancement = 20;
            enhancer.success(item)
            expect(item.enhancement).toBe(20)
        })

        it('should not change item durability', () => {
            item.durability = 60;
            enhancer.success(item)
            expect(item.durability).toBe(60)
        })
        
    })

    describe('fail()', () => {
        it('should decrease item durability by 5 if enhancement < 15', () => {
            item.enhancement = 14;
            item.durability  = 35;
            enhancer.fail(item)
            expect(item.durability).toBe(30);
        })

        it('should decrease item durability by 10 if enhancement >= 15', () => {
            item.enhancement = 15;
            item.durability  = 35;
            enhancer.fail(item)
            expect(item.durability).toBe(25);
        })
        
        it('should decrease item enhancement by 1 if enhancement > 16', () => {
            item.enhancement = 17;
           
            enhancer.fail(item)
            expect(item.enhancement).toBe(16);
           
        })
    })
})
