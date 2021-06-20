const deepEqual = require('deep-equal');
var wish = require('wish');

function checkHand(hand) {
    if(isPair(hand)){
        return 'pair';
    }else if(isTriple(hand)){
        return 'three of a kind';
    }else if(isQuadruple(hand)){
        return 'four of a kind';
    }else if(isFlush(hand)){
        return 'flush';
    }else{
        return 'high card';
    }
}

function isPair(hand){
    return multiplesIn(hand) === 2;
}

function isTriple(hand){
    return multiplesIn(hand) === 3;
}

function isQuadruple(hand){
    return multiplesIn(hand) === 4;
}

function isFlush(hand) {
    return allTheSameSuit(suitsFor(hand));
}

function multiplesIn(hand) {
    return highestCount(valuesFromHand(hand));
};

function highestCount(values) {
    var counts = {}
    
    values.forEach(function(value, index){
        counts[value] = 0;
        if(value == values[0]){
            counts[value] = counts[value] + 1;
        };
        if(value == values[1]){
            counts[value] = counts[value] + 1;
        };
        if(value == values[2]){
            counts[value] = counts[value] + 1;
        };
        if(value == values[3]){
            counts[value] = counts[value] + 1;
        };
        if(value == values[4]){
            counts[value] = counts[value] + 1;
        };
    });

    var totalCounts = Object.keys(counts).map(function(key){
        return counts[key];
    });

    return totalCounts.sort(function(a,b){return b-a})[0];
};

function valuesFromHand(hand) {
    return hand.map(function(card){
        return card.split('-')[0];
    })
};

function allTheSameSuit(suits) {
    var toReturn = true;

    suits.forEach(function(suit){
        if(suit !== suits[0]){
            toReturn = false;
        }
    })

    return toReturn;
}

function suitsFor(hand) {
    return hand.map(function(card){
        return card.split('-')[1];
    });
}

describe('highestCount()', function(){
    it('返回陣列中同點數手牌的最大張數', function(){
        var result = highestCount(['2','4','4','4','2']);
        wish(result === 3);
    });
});

describe('valuesFromHand()', function(){
    it('只從手牌中返回點數', function(){
        var result = valuesFromHand(['2-H','3-C','4-D','5-H','2-C']);
        wish(deepEqual(result,['2','3','4','5','2']));
    });
});

describe('isPair()', function(){
    it('找到一組對子', function(){
        var result = isPair(['2-H','3-C','4-D','5-H','2-C']);
        wish(result);
    });
});

describe('checkHand()', function (){
    it('處理對子', function(){
        var result = checkHand(['2-H','3-C','4-D','5-H','2-C']);
        wish(result === 'pair');

        var anotherResult = checkHand(['3-H','3-C','4-D','5-H','2-C']);
        wish(anotherResult === 'pair');
    });

    it('處理三條', function(){
        var result = checkHand(['3-H','3-C','3-D','5-H','2-H']);
        wish(result === 'three of a kind');
    });

    it('處理四條', function(){
        var result = checkHand(['3-H','3-C','3-D','3-S','2-H']);
        wish(result === 'four of a kind');
    });

    it('處理高牌', function(){
        var result = checkHand(['2-H','5-C','9-D','7-S','3-H']);
        wish(result === 'high card');
    });

    it('同花', function(){
        var result = checkHand(['2-H','5-H','9-H','7-H','3-H']);
        wish(result === 'flush');
    });
});

describe('allTheSameSuit()', function(){
    it('如果所有元素皆相同，回報 true', function(){
        var result = allTheSameSuit(['D','D','D','D','D']);
        wish(result);
    });
});