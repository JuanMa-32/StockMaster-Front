import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from './../../context/AppContext';
import { AuthContext } from './../../auth/context/AuthContext';
import { Pie, PieChart, ResponsiveContainer, Sector } from 'recharts';
import { Tooltip } from 'react-bootstrap';
import { UsuarioRow } from './../usuarios/UsuarioRow';

export const PieChartUsuarios = () => {
    const { usuarios,loadingUsuarios } = useContext(AppContext)
    const { login } = useContext(AuthContext)
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        loadingUsuarios(login.idNegocio)
    }, [])

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };
    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                    {payload.nombre}
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={fill}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Ventas ${value}`}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                    {`( ${(percent * 100).toFixed(2)}%)`}
                </text>
            </g>
        );
    };

    return (
        <div style={{width: '100%',height: 400}}>
            <h6 className='mx-3 mt-3'>Ventas por usuario</h6>
        <ResponsiveContainer>
            <PieChart >
                <Pie
                   activeIndex={activeIndex}
                   activeShape={renderActiveShape}
                   data={usuarios}
                   cx="50%"
                   cy="50%"
                   innerRadius={60}
                   outerRadius={90}
                   fill="#63E6BE"
                   dataKey="ventas"
                   onMouseEnter={onPieEnter}
                >
                </Pie>
                <Tooltip/>
            </PieChart>
        </ResponsiveContainer>
        <table className="table table-hover caption-top mx-2" >
                <thead >
                    <tr >
                        <th  style={{  fontfamily: 'Kanit, sans-serif' }}>Usuario</th>
                        <th  style={{  fontfamily: 'Kanit, sans-serif' }}>Ctd.</th>
                        <th  style={{  fontfamily: 'Kanit, sans-serif' }}>Valor</th>
                        <th  style={{  fontfamily: 'Kanit, sans-serif' }}>%</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios?.map(usuario =>
                            <UsuarioRow key={usuario.id} usuario={usuario}  />
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
