// abstract class Base {
//     abstract getName(): string;

//     printName() {
//         console.log("Hello, " + this.getName());
//     }
// }
// 不能用 new 实例化 Base，因为它是抽象的。 相反，我们需要创建一个派生类并实现抽象成员：
// const b = new Base()

abstract class Base {
    abstract getName(): string;
    printName() { }
}

class Derived extends Base {
    getName() {
        return "world";
    }
}

const d = new Derived();
d.printName();