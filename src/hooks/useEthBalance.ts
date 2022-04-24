import { useEffect, useMemo, useCallback, useState } from 'react';
import { getChain, useMoralis } from 'react-moralis';
import { useMoralisWeb3Api } from 'react-moralis';
import { tokenValueTxt } from '../utils/utils';

export const useEthBalance = () => {
  const Web3Api = useMoralisWeb3Api();
  const { user } = useMoralis();
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState('');
  const ethAddress: string = user?.get('ethAddress') || '';

  const eth = useMemo(() => {
    const chainData = getChain('0x4');

    if (!chainData) {
      return null;
    }

    return chainData.nativeCurrency;
  }, []);

  const fetchEthBalance = useCallback(async () => {
    if (Web3Api && ethAddress) {
      try {
        setLoading(true);
        const data = await Web3Api.account?.getNativeBalance({
          chain: 'rinkeby',
          address: ethAddress,
        });
        setBalance(data.balance);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Web3Api.account]);

  useEffect(() => {
    fetchEthBalance();
  }, [fetchEthBalance]);

  const formattedBalance = useMemo(() => {
    if (!Web3Api || !ethAddress || !eth) return null;

    return tokenValueTxt(balance, eth.decimals, eth.symbol);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [balance, eth]);

  return {
    formattedBalance,
    loading,
  };
};
