import {
  ScrollView,
  StyleSheet,
} from 'react-native'

import useFetchData from '@/hooks/useFetchData'
import Loading from '@/components/loading'
import Error from '@/components/error'
import Slides from '@/components/Slides'

export default function Index() {
  
    

  const url = '/'
  const { data, loading, error, onReload } = useFetchData(url)
  
  const { recommendedCourses, likesCourses, introductoryCourses } = data

  if (loading) return <Loading />
  if (error) return <Error onReload={onReload} />
  
  return (
    <ScrollView style={styles.container}>
      {/* 推荐的课程 */}
      <Slides courses={recommendedCourses} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
  
})
