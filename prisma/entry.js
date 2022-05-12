import prisma from "./prisma";

export const getAllEntries = async () => await prisma.entry.findMany({});

export const getEntry = async (id) => {
    const entry = await prisma.entry.findUnique({
        where: { id },
    });
    return entry;
};

export const createEntry = async (word, translation, definition) => {
    const entry = await prisma.entry.create({
        data: {
            word,
            translation,
            definition,
        },
    });
    return entry;
};

export const updateEntry = async (id, updateData) => {
    const entry = await prisma.entry.update({
        where: {
            id,
        },
        data: {
            ...updateData,
        },
    });
    return entry;
};

export const deleteEntry = async (id) => {
    const entry = await prisma.entry.delete({
        where: {
            id,
        },
    });
    return entry;
};
