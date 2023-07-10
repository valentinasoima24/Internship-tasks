function computeSizeOnDisk(clusterSize, fileSize) {
    const clustersNumber = Math.ceil(fileSize / clusterSize);
    return fileSizeOnDisk = clustersNumber * clusterSize;
}

const clusterSize = 512;
const fileSize = 1500;
computeSizeOnDisk(clusterSize, fileSize);