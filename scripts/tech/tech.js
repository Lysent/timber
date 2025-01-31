// Tech tree node attacher ripped off from the ContentParser

const chainNode = (parent, research) => {
    const node = new TechTree.TechNode(null, research.unlock, research.requirements || ItemStack.empty);

    if (research.objectives) {
        for (let i = 0; i < research.objectives.length; i++) {
            const objective = research.objectives[i];
            node.objectives.add(objective);
        }
    }

    log("edt", "created tech node");

    if (research.planet) node.planet = Vars.content.getByName(ContentType.planet, research.planet);

    log("edt", "updated planet");

    if (!parent.children.contains(node)) {
        parent.children.add(node);
    }

    log("edt", "childed node");

    //reparent the node
    node.parent = parent;

    log("edt", "reparented node");

    return node;
};

const addTechNode = (research) => {
    const parent = TechTree.all.find(t => t !== undefined && t.content == research.parent && (t.planet !== null ? t.planet == research.planet : true));

    log("edt", "(potentially) found parent");

    const node = chainNode(parent, research);

    return node;
};

Events.on(ContentInitEvent, () => {
    // Serpulo
    addTechNode({
        parent: Vars.content.item("copper"),
        unlock: Vars.content.item("edt-timber"),
        objectives: [new Objectives.Produce(Vars.content.item("edt-timber"))],
        planet: "serpulo"
    });
});