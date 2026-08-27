import addon from './addon.js';
import { IdleState } from './types.js';

export { IdleState };

export const getLocked = (): boolean => {
	if (!addon) {
		return false;
	}

	return addon.getLocked();
};

export const getIdleSeconds = (): number => {
	if (!addon) {
		return -1;
	}

	return addon.getIdleSeconds();
};

export const getIdlePrevented = (): boolean => {
	if (!addon) {
		return false;
	}

	return addon.getIdlePrevented();
};

export const getIdleState = (idleThreshold: number): IdleState => {
	if (!addon) {
		return IdleState.unknown;
	}

	return addon.getIdleState(idleThreshold);
};

const RealIdle = {
	getLocked,
	getIdleSeconds,
	getIdlePrevented,
	getIdleState
};

export default RealIdle;
