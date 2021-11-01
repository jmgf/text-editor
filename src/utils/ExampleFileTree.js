import Constants from "./Constants"

export default [
    {
        id: 'dist',
        name: 'dist',
        type: Constants.FOLDER,
        children: [
            { id: 'dist_index.html', name: 'index.html', type: Constants.FILE },
            { id: 'dist_main.js', name: 'main.js', type: Constants.FILE },
            { id: 'dist_main.css', name: 'main.css', type: Constants.FILE }
        ]
    },
    {
        id: 'src',
        name: 'src',
        type: Constants.FOLDER,
        children: [
            { 
                id: 'src_utils',
                name: 'utils', 
                type: Constants.FOLDER, 
                children: [
                    { id: 'src_utils_ExampleFileTree.js', name: 'ExampleFileTree.js', type: Constants.FILE },
                    { id: 'src_utils_Constants.js', name: 'Constants.js', type: Constants.FILE }
                ]
            },
            { id: 'src_index.html', name: 'index.html', type: Constants.FILE },
            { id: 'src_index.js', name: 'index.js', type: Constants.FILE },
            { id: 'src_index.css', name: 'index.css', type: Constants.FILE },
            { id: 'src_App.js', name: 'App.js', type: Constants.FILE },
            { id: 'src_FileTree.js', name: 'FileTree.js', type: Constants.FILE }
        ]
    },
    { id: 'package.json', name: 'package.json', type: Constants.FILE },
    { id: 'README.md', name: 'README.md', type: Constants.FILE }
]