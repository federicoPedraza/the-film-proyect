
import { Paper, Typography } from '@mui/material';
import { FC } from 'react';
import { SkeletonRows } from '../../components/ui/skeletons';
import Table from '../../components/ui/table';
import { useUser } from '../../services/hooks/useUser';
const Profile: FC = () => {
    const { userData, loading } = useUser();
    const {
        id,
        include_adult,
        iso_3166_1: country,
        iso_639_1: language,
        name,
        username,
    } = userData
    const cellInfo: Record<string, string | number | boolean | undefined>[] = [
        { title: 'TMdb username', value: username },
        { title: 'TMdb ID', value: id },
        { title: 'Real name', value: name || 'Not configurated' },
        { title: 'Country', value: country || 'Unknown country' },
        { title: 'Language', value: language || 'Language not configurated' },
        { title: '+18 visible', value: include_adult ? 'Yes' : 'No' },
    ]
    return (
        <>
            <Paper>
                {loading ?
                    <SkeletonRows cellInfo={cellInfo} /> :
                    <Table cellInfo={cellInfo} />}
            </Paper>
            <Typography style={{ marginTop: '1rem', color: '#fff' }}>
                <a target='_blank'
                    href='https://www.themoviedb.org/settings/profile'>
                    Edit
                </a>
            </Typography>
        </>
    )
}

export default Profile