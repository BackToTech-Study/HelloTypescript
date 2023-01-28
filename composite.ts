abstract class TreeItemCollection {

    constructor(
        protected parent: TreeItemCollection | null,
        public name: string
    ) {}

    protected abstract get childrenNames(): string[];

    get children(): TreeItemCollection[] {
        return this.childrenNames.map(name => new TreeItem(this, name));
    };
}

class TreeItem extends TreeItemCollection {
    constructor(
        parent: TreeItemCollection | null,
        name: string,
    ) {
        super(parent, name);
    }

    protected get childrenNames(): string[] {
        let base = this.name.split("root").filter(n => n !== '')[0] || '0';
        return [base+'1', base+'2'];
    }
}

let root = new TreeItem(null, "root");

function showTreeLevels(collection: TreeItemCollection, numberOfLevels:  number) {
    console.log(collection.name);
    if (numberOfLevels > 0) {
        let newLelvel = numberOfLevels - 1;
        for (let child of collection.children) {
            showTreeLevels(child, newLelvel);
        }
    }
}

showTreeLevels(root, 3);
