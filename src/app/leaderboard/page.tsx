'use client'

import { Table } from '@/components/Table';
import { rankingColumn, rankingDataSource } from '@/constants/leaderboard.constant';
import './style.css';

export default () => {
    return (
        <div className='leaderboard-container'>
            <div className='flex justify-center'>
                <Table column={rankingColumn} dataSource={rankingDataSource} />
            </div>
        </div>
    )
}