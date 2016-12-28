(function() {
    var tableData = [
        {   c1 : "a", c2 : 1    },
        {   c1 : "a", c2 : 2    },
        {   c1 : "a", c2 : 3    },
        {   c1 : "b", c2 : 1    },
        {   c1 : "b", c2 : 6    },
        {   c1 : "b", c2 : 4    },
        {   c1 : "b", c2 : 7    },
        {   c1 : "b", c2 : 8    },
        {   c1 : "c", c2 : 2    },
        {   c1 : "c", c2 : 4    },
        {   c1 : "d", c2 : 3    },
        {   c1 : "e", c2 : 6    }
    ];

    var expectedAccumulation = {
        "a" : [1, 2, 3],
        "b" : [1, 4, 6, 7, 8],
        "c" : [2, 4],
        "d" : [3],
        "e" : [6]
    };

    var accumulation;
    accumulation = tableData.reduce(function(uniqueKeyAccumulator, currentRow) {
        var uniqueKey = currentRow["c1"];
        var value = currentRow["c2"];
        if (!(uniqueKey in uniqueKeyAccumulator)) {
            uniqueKeyAccumulator[uniqueKey] = [];
        }
        uniqueKeyAccumulator[uniqueKey].push(value);
        uniqueKeyAccumulator[uniqueKey].sort();
        return uniqueKeyAccumulator;
    }, {});

    console.log(accumulation);
})();
