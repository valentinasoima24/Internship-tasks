function computeSizeOnDisk(clusterSize, fileSize) {
    const clusterCount = Math.ceil(fileSize / clusterSize);
    return clusterCount * clusterSize;
}

const clusterSize = 512;
const fileSize = 1500;
computeSizeOnDisk(clusterSize, fileSize);