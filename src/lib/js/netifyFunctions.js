import api from "./api.js";

export const getNetworkDetails = async (ipAddress, subnetPrefix) => {
	try {
		const response = await api.post(
			"/v1/network/details/",
			{
				ip_address: ipAddress,
				mask_prefix: subnetPrefix,
			},
			{
				validateStatus: (status) => {
					return (status >= 200 && status < 300) || status === 400;
				},
			},
		);
		return response.data;
	} catch (err) {
		console.error(err);
	}
};

export const convertPrefixToMask = async (subnetPrefix) => {
	try {
		const response = await api.get(`/v1/mask/prefix/${subnetPrefix}/`, {
			validateStatus: (status) => {
				return (status >= 200 && status < 300) || status === 400;
			},
		});
		return response.data;
	} catch (err) {
		console.error(err);
	}
};

export const convertMaskToPrefix = async (subnetMask) => {
	try {
		const response = await api.get(`/v1/mask/ip/${subnetMask}/`, {
			validateStatus: (status) => {
				return (status >= 200 && status < 300) || status === 400;
			},
		});
		return response.data;
	} catch (err) {
		console.error(err);
	}
};

export const convertIPToBinary = async (ipAddress) => {
	try {
		const response = await api.get(`/v1/ip/bin/${ipAddress}/`, {
			validateStatus: (status) => {
				return (status >= 200 && status < 300) || status === 400;
			},
		});
		return response.data;
	} catch (err) {
		console.error(err);
	}
};

export const convertBinaryToIP = async (binaryIPAddress) => {
	try {
		const response = await api.get(`/v1/ip/dec/${binaryIPAddress}/`, {
			validateStatus: (status) => {
				return (status >= 200 && status < 300) || status === 400;
			},
		});
		return response.data;
	} catch (err) {
		console.error(err);
	}
};

export const divideNetwork = async (networkIP, maskPrefix, hostsPerSubnet) => {
	try {
		const response = await api.post(
			"/v1/network/subnets/",
			{
				network_ip_address: networkIP,
				mask_prefix: maskPrefix,
				hosts_per_subnet: hostsPerSubnet,
			},
			{
				validateStatus: (status) => {
					return (status >= 200 && status < 300) || status === 400;
				},
			},
		);
		return response.data;
	} catch (err) {
		console.error(err);
	}
};
