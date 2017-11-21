const input =
    "COLLECTION COLLECTION COLLECTION_END COLLECTION COLLECTION COLLECTION_END COLLECTION COLLECTION_END COLLECTION COLLECTION COLLECTION_END COLLECTION COLLECTION_END COLLECTION_END COLLECTION_END COLLECTION_END";

const origInputArr = input.split(" ");
const inputArr = origInputArr.reverse();

let currentNode = {};
let previousNode = null;
let nextNode = null;

/*

{
    COLLECTION;
        COLLECTION;
        COLLECTION_END;
        COLLECTION;
            COLLECTION;
            COLLECTION_END;
            COLLECTION;
            COLLECTION_END;
            COLLECTION;
                COLLECTION;
                COLLECTION_END;
                COLLECTION;
                COLLECTION_END;
            COLLECTION_END;
        COLLECTION_END;
    COLLECTION_END;
}

*/

function createNestedObject(inputArr, previousNode, currentNode, nextNode) {
    if (!inputArr.length) {
        return;
    } else {
        let currentInput = inputArr.pop();
        if (currentInput === "COLLECTION") {
            nextNode = {};
            previousNode = currentNode;
            currentNode[
                "COLLECTION" + (Object.keys(currentNode).length + 1)
            ] = nextNode;
            currentNode = currentNode["COLLECTION" + Object.keys(currentNode).length];
            createNestedObject(inputArr, previousNode, currentNode, nextNode);
            // console.log(JSON.stringify(previousNode, null, "  "), "\n");
        } else if (currentInput === "COLLECTION_END") {
            currentNode = previousNode;
            createNestedObject(inputArr, previousNode, currentNode, nextNode);
            // console.log(JSON.stringify(previousNode, null, "  "), "\n");
        } else {
            throw new EvalError(
                "the input must be either COLLECTION or COLLECTION_END"
            );
        }
    }
}

createNestedObject(inputArr, previousNode, currentNode, nextNode);

console.log(JSON.stringify(currentNode, null, "  "));