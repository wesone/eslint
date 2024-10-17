class TestClass
{
    constructor() {
        this.arrow = x => console.log(x);
        this.arrow2 = (x, y) => {
            console.log(x);
            console.log(y);
        };
    }

    fn(x, y) {
        try
        {
            if(x)
                console.log(x);
            else
                console.log(y);
            if(x >= 21)
            {
                x *= 2;
                if(y)
                    x++;
            }
            switch(x)
            {
                case 21:
                    console.log('twenty one');
                    break;
                case 42:
                    console.log('forty two');
                    break;
                default:
                    console.log('x', x);
            }
        }
        catch(e)
        {
            console.error(e);
        }
    }
}

function fn(x)
{
    console.log(x);
}

const fn2 = function(x) {
    console.log(x);
};

fn(42);

try
{
    fn2();
}
catch(e){}
finally
{
    // finally
}

const a = 1;
const arr = [a, 2, 3];
const obj = {a, b: 1, c: 1};

for(let i = 0; i < arr.length; i++)
    console.log(i);

let c = 0;
while(c < arr.length)
{
    console.log(c);
    c++;
}

do
{
    console.log(c);
} while(c < arr.length);
