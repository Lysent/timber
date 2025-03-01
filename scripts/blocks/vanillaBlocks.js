const trees = ["pine", "snowPine", "sporePine", "whiteTree", "whiteTreeDead"];
for (let i = 0; i < trees.length; i++) {
    const tree = Blocks[trees[i]];

    tree.breakable = true;
    tree.alwaysReplace = true;
    tree.requirements = ItemStack.with(Vars.content.item("edt-timber"), 32);
}