import {deleteAsync} from 'del';
import fs from 'fs'
import archiver from 'archiver'


//Abstract Donjon
//Clean Abstract Donjon Folder
async function cleanAbstractDonjon() {
    await deleteAsync(['abstractdonjon/build/**']);
}

//Build Abstract Donjon
function createZipAbstractDonjon() {
    const output = fs.createWriteStream('abstractdonjon/build/download.zip');
    const archive = archiver('zip', {
    zlib: { level: 9 }
    });

    output.on('close', function() {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
    });
    output.on('end', function() {
        console.log('Data has been drained');
    });
    archive.on('warning', function(err) {
        if (err.code === 'ENOENT') {
            // log warning
        } else {
            // throw error
            throw err;
        }
    });
    archive.on('error', function(err) {
        throw err;
    });
    archive.pipe(output);

    //Files
    archive.file('./abstractdonjon/module.json', { name: './module.json' });
    archive.file('./abstractdonjon/manifest.json', { name: './manifest.json' });
    archive.file('./abstractdonjon/abstractdonjonshared.lock', { name: './abstractdonjonshared.lock' });

    //Directories
    archive.directory('./abstractdonjon/packs', 'packs');

    archive.finalize();
}

//Stargate Coalition
//Clean Stargate Coalition Folder
async function cleanStargateCoalition() {
    await deleteAsync(['stargatecoalition/build/**']);
}

//Build Abstract Donjon
function createZipStargateCoalition() {
    const output = fs.createWriteStream('stargatecoalition/build/download.zip');
    const archive = archiver('zip', {
    zlib: { level: 9 }
    });

    output.on('close', function() {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
    });
    output.on('end', function() {
        console.log('Data has been drained');
    });
    archive.on('warning', function(err) {
        if (err.code === 'ENOENT') {
            // log warning
        } else {
            // throw error
            throw err;
        }
    });
    archive.on('error', function(err) {
        throw err;
    });
    archive.pipe(output);

    //Files
    archive.file('./stargatecoalition/module.json', { name: './module.json' });

    //Directories
    archive.directory('./stargatecoalition/packs', 'packs');

    archive.finalize();
}

//DND
//Clean DND Folder
async function cleanDND() {
    await deleteAsync(['dndshared/build/**']);
}

//Build DND
function createZipDND() {
    const output = fs.createWriteStream('dndshared/build/download.zip');
    const archive = archiver('zip', {
    zlib: { level: 9 }
    });

    output.on('close', function() {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
    });
    output.on('end', function() {
        console.log('Data has been drained');
    });
    archive.on('warning', function(err) {
        if (err.code === 'ENOENT') {
            // log warning
        } else {
            // throw error
            throw err;
        }
    });
    archive.on('error', function(err) {
        throw err;
    });
    archive.pipe(output);

    //Files
    archive.file('./dndshared/module.json', { name: './module.json' });

    //Directories
    archive.directory('./dndshared/packs', 'packs');

    archive.finalize();
}


//Abstract Donjon
console.log("Cleaning and Building Abstract Donjon");
await cleanAbstractDonjon();
createZipAbstractDonjon();

//Stargate Coalition
console.log("Cleaning and Building Stargate Coalition");
await cleanStargateCoalition();
createZipStargateCoalition();

//DND5e
console.log("Cleaning and Building DND5e");
await cleanDND();
createZipDND();