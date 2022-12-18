
import { Paper, TableRow, TableCell, Avatar, Tab } from '@material-ui/core';
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
        avatar,
    } = userData
    const cellInfo: Record<string, string | number | boolean | undefined>[] = [
        { title: 'Usuario TMdb', value: username },
        { title: 'TMdb ID', value: id },
        { title: 'Nombre real', value: name || 'Desconocido' },
        { title: 'País', value: country || 'Pais no establecido'  },
        { title: 'Lenguaje', value: language || 'Lenguaje no establecido' },
        { title: 'Apto +18', value: include_adult ? 'Si' : 'No' },
    ]
    return (
        <Paper>
            { loading ? 
            <SkeletonRows cellInfo={cellInfo}/> :
            <Table cellInfo={cellInfo} />}
        </Paper>
    )
}

export default Profile