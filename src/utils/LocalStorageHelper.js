import exampleFileTree from "./ExampleFileTree"

export default class LocalStorageHelper {

    static loadFileTree (fileTree) {
        let loadedFileTree = JSON.parse(localStorage.getItem("fileTree"))
        return loadedFileTree && loadedFileTree.length ? loadedFileTree : exampleFileTree;
    }

    static saveFileTree (fileTree) {
        localStorage.setItem("fileTree", JSON.stringify(fileTree));
    }
}